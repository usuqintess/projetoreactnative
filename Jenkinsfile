pipeline {
    agent any
    environment {
        GITHUB_TOKEN = credentials('github-pat')
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    git url: 'https://github.com/usuqintess/projetoreactnative.git', 
                        branch: 'main', 
                        credentialsId: "${env.GITHUB_TOKEN}"
                }
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test -- --ci --reporters=jest-junit'
            }
        }
        stage('Archive Test Results') {
            steps {
                junit 'jest-junit.xml'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
        }
    }
}
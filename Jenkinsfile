pipeline {
    agent any
    environment {
        GITHUB_TOKEN = credentials('github-pat')
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/usuqintess/projetoreactnative.git', credentialsId: "${env.GITHUB_TOKEN}"
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
            junit 'reports/**/*.xml'
        }
        success {
            mail to: 'edson.junior@qintess.com',
                 subject: "Successful Build: ${env.JOB_NAME} ${env.BUILD_NUMBER}",
                 body: "The build was successful!"
        }
        failure {
            mail to: 'edson.junior@qintess.com',
                 subject: "Failed Build: ${env.JOB_NAME} ${env.BUILD_NUMBER}",
                 body: "The build failed. Please check the logs."
        }
    }
}

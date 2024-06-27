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
                bat 'npm test -- --ci --reporters=jest-junit --config=jest.config.js'
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
        // success {
            // mail to: 'edson.junior@qintess.com',
            //      subject: "Successful Build: ${env.JOB_NAME} ${env.BUILD_NUMBER}",
            //      body: "The build was successful!"
        // }
        // failure {
            // mail to: 'edson.junior@qintess.com',
            //      subject: "Failed Build: ${env.JOB_NAME} ${env.BUILD_NUMBER}",
            //      body: "The build failed. Please check the logs."
        }pipeline {
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
                bat 'npm test -- --ci --reporters=jest-junit --config=jest.config.js'
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

    }
}

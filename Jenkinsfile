pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout the application...'
            }
        }

        stage('Build') {
            agent {
                docker {
                    image 'node:20-alpine' // Use any Node.js version you need
                    args '-u root:root'    // Optional: run as root to avoid permission issues
                }
            }
            steps {
                echo 'Building the application inside Docker...'
                sh 'yarn install'
                sh 'yarn build'
            }
        }

        stage('Lint') {
            steps {
                echo 'Checking code style (lint)...'
                // Replace with your lint command:
                // sh 'npm run lint'
                // sh './gradlew lint'
                // sh 'flake8 .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Example:
                // sh 'npm test'
                // sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Replace with your actual deployment command
                // sh './deploy.sh'
                // sh 'scp build.zip user@server:/var/www/'
                // sh 'kubectl apply -f deployment.yaml'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo '✅ Pipeline succeeded.'
        }
        failure {
            echo '❌ Pipeline failed.'
        }
    }
}

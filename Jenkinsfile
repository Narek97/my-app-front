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
                    reuseNode true
                }
            }
            steps {
                echo 'Building the application inside Docker...'
                sh 'yarn install'
                sh 'yarn build'
            }
        }

       stage('Lint') {
           agent {
               docker {
                   image 'node:20-alpine'
                   reuseNode true
               }
           }
           steps {
               echo 'Checking code style (lint)...'
               sh 'yarn install'       // Ensure dependencies are installed
               sh 'yarn lint'
           }
       }

       stage('Test') {
           agent {
               docker {
                   image 'node:20-alpine'
                   reuseNode true
               }
           }
           steps {
               echo 'Running tests...'
               sh 'yarn install'       // Optional: if not sharing volume/cache
               sh 'yarn test'
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

pipeline {
    agent {
        label 'build'
    }
    stages {
        stage('initialize') {
            steps {
                sh '''
                    npm ci
                '''
            }
        }
        stage('verify') {
            steps {
                sh '''
                    npm run verify
                '''
            }
        }
        stage('package lambda') {
            steps {
                sh '''
                    npm run build
                    aws cloudformation package --template-file infrastructure/cloudformation/lambda.yml --s3-bucket jcnix-api-dev --output-template infrastructure/cloudformation/lambda-package.yml
                '''
            }
        }
        stage('deploy lambda') {
            steps {
                sh '''
                    aws cloudformation deploy --template-file infrastructure/cloudformation/lambda-package.yml --stack-name api-bucket --capabilities CAPABILITY_NAMED_IAM
                '''
            }
        }
    }
}
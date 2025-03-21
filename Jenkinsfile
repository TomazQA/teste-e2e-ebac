pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/TomazQA/teste-e2e-ebac.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Executar testes') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.*', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.*', allowEmptyArchive: true
        }
    }
}

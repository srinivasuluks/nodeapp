node {
	def app
	
	stage('Pull Code'){
	     /* check out the code */
		checkout scm
    }
	
	stage('Build Step'){
	     /* Build Step */
		app = docker.build("srinivasuluks/nodeapp")
    }
	stage('Testing Step'){
	     /* Test Step */
		 
		echo "Test Passed"
    }	

	stage('Push Image'){
	     /* Push  Step */
		docker.withRegistry('https://registry.hub.docker.com', 'sriniDockerHub') {
			app.push("${env.BUILD_NUMBER}")
			app.push("latest")
		}
		echo "Push finished"
    }
    
}

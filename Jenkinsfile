node {
    checkout scm

    docker.withRegistry('https://hub.docker.com', 'dockerhub') {

        def customImage = docker.build("srinivasuluks/node-web-app")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}

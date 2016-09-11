all: build

grails:
	./grailsw war Dockerfile/tomcat/ROOT.war -Dgrails.env=docker


build:grails
	docker build -t whatever/streama Dockerfile/tomcat

prod:build
	docker run -d -p 8080:8080 --name="streama" whatever/streama

test:build
	docker run -it --rm -p 8080:8080 -e "MYSQL_HOST=localhost" -e "MYSQL_port=3306" -e "MYSQL_DB=maximus" -e "MYSQL_USER=root" -e "MYSQL_PASSWORD=" whatever/streama

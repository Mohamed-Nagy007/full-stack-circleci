# Project infrastructure
========================
### AWS services
* **RDS**
* **S3 bucket**
* **Elastic Beanstalk**

## RDS
Amazon Relational Database Service is a distributed relational database service by Amazon Web Services. It is a web service running "in the cloud" designed to simplify the setup, operation, and scaling of a relational database for use in applications.

* Database Engine: PostgreSQL
* Database Region: us-east-1
* Database Port: 5432
* Database Host URL: "http://database-1.chwoc1n95sdl.us-east-1.rds.amazonaws.com"

## S3 bucket [Frontend]
Amazon S3 is cloud object storage with industry-leading scalability, data availability, security, and performance.
It's Simply Our Frontend Web Pages Host

* Bucket Name: mo-nagy-udagram
* Bucket Region: us-east-1
* Bucket website endpoint:  "http://mo-nagy-udagram.s3-website-us-east-1.amazonaws.com"

## Elastic Beanstalk [backend]
AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications.
The Most Important Part That Makes A Magical Merge Between The Frontend And The Backend Part Which At The End Leads To A Successful Application. 

* APP developed with: Node.js
* Application Name: udagram-api
* Environment Name: udagram-api-dev
* Bucket Region: us-east-1
* Endpoint: "http://udagram-api-dev.eba-jrqpk2cz.us-east-1.elasticbeanstalk.com"




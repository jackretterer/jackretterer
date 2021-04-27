# Building my Personal Portfolio Website

This is the sourcecode behind jackretterer.com

## AWS S3 Hosting

I decided to host a static website on S3 for simplicity and cost

## AWS Route 53

I used AWS Route 53 for domain registration.

## AWS CloudFront

I used CloudFront for HTTPS

## React

For the most part this website is built from scratch. I did elect to use React. 

## AWS CLI

I installed AWS CLI with brew.
Run: aws configure
Then enter credentials
Run: Yarn build
Then add "deploy": "aws s3 sync build/ s3://your-bucket-name"
Run: Yarn depoly
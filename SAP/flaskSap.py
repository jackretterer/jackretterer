# Task:

# Create a basic Flask web application:

# Root / is not important :)
# /<int:number> will display integers from 1 to that number
# /<int:number>/odd will display only odd numbers in that range
# /<int:number>/even will display only even numbers in that range
# /<int:number>/prime will display only prime numbers in that range

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Index Page'

# will display integers from 1 to that number
@app.route('/<int:post_id>')
def show_post(post_id):
	numsList = []
	count = 1
	while count != post_id:
		numsList.append(count)
		count+=1
	numsList.append(post_id)
	return 'Numbers:' + str(numsList)

# will display only odd numbers in that range
@app.route('/<int:post_id>/odd')
def show_odd(post_id):
	numsList = []
	count = 1
	while count != post_id:
		if count % 2 == 1:
			numsList.append(count)
		count+=1
	return 'Numbers:' + str(numsList)

# will display only even numbers in that range
@app.route('/<int:post_id>/even')
def show_even(post_id):
	numsList = []
	count = 1
	while count != post_id:
		if count % 2 == 0:
			numsList.append(count)
		count+=1
	return 'Numbers:' + str(numsList)

# will display only prime numbers in that range
@app.route('/<int:post_id>/prime')
def show_prime(post_id):
	numsList = list()
	sieve = [True] * (post_id+1)
	for p in range(2, post_id+1):
		if (sieve[p]):
			numsList.append(p)
			for i in range(p, post_id+1, p):
				sieve[i] = False
	return 'Numbers:' + str(numsList)

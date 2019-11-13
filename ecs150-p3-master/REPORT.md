# REPORT: Project #3 User-Level Thread Library Part-2

## Overview
The purpose of this project was to extend student's knowledge of semaphores and
access to memory. The project taught students about critical sections and 
synchronization between threads. Students also learned how to write extensive
unit testing.

## Design

### Semaphore Implementation
Our semaphore implementation followed the skeleton code provided by the
professor. We initialized a semaphore struct that contained a count and queue.
Within sem_create we malloc-ed for the semaphore and created the queue. Within 
sem_destroy we had a few test cases and then called queue_destroy and freed our
memory. In sem_down we entered the critical section, then checked to see if 
count was zero and if it was we enqueued a thread. Otherwise we decremented the
semaphore. In sem_up we check to see if queue length was not equal to 0. If it 
was not we dequeued and unblocked the thread. In sem_get value we had a series 
of if statements checking the count of sem. If sem equalled zero we set the value
to the provided value.

### TPS Implementation
Our Thread Private Storage implementation was based on a two struct format, one
for the tps_thread and the other for the page. Within tps_thread we had the 
current thread's TID and a pointer to the page_ptr struct. Within the page struct
we had the number of threads that point to the same page and the address of the
page. We then included two more helper function on top of the provided skeleton code. One of the functions matched the current thread's TID to the target. The other fuction matched the page address. We then took the segv_handler function
provided in discussion and added the necessary parts. Within tps_init we took the provided segv if statement and then intialized our global queue. Tps_create created our tids, temp tps_thread and then iterated over the queue. We then added a value to the current thread page pointer. Then we enqueued it. Destroy used munmap, free and queue_delete. Within tps_read we changed permissions and copied memory. Within tps_write we checked that the current node had at least one thread pointing to the page. Then we changed permissions and copied data and changed page pointers. Tps_clone simply created a two threads and iterated over the queue to get values. We then hard copied and enqueued the correct threads.


## Testing

### Makefile
Within our Makefile we simply added an object file for tps and sem.

### Unit Testing
For unit testing we followed the guide lines in the discussion slides. We 
implemented the two simple cases and the two complex cases. They can be found
within two separate files (tps_complex_test and tps_simple_test).


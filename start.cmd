You'll then be able to launch redis with:

$ redis-server --daemonize yes

Which will run redis in the background freeing your shell so you can play with it using the redis client:

$ redis-cli
$ 127.0.0.1:6379> SET foo bar
OK
$ 127.0.0.1:6379> GET foo
"bar"

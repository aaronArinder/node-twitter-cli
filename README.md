### Twitter CLI
This is a CLI tool for interacting with Twitter. Useful for checking whether some service is done. E.g., recently I used it to find out whether other folks were experiencing AWS DNS issues without having to open a browser.

#### Installation
First, [create an app](https://developer.twitter.com/en/apps) on Twitter. After you've successfully created one, find the `keys and tokens` tab in your newly created app.

Clone the repository and run `npm install`.

Find `env-example.js`. Fill out `env-example` with the corresponding keys/tokens in your twitter app's `keys and tokens` tab.

Change `env-example.js`'s name to `env.js`.


#### Example usage
Currently, there's just one feature: `search`. Two arguments are passed two it, with a `|` separating them. The first argument is what you want to search for. The second argument is the greatest number of responses you want. Tweets are searched in chronological order, with the most recent tweets be searched through first.

```
  twittah -s 'Detroit | 10'
```


will return, in the following format `user_name :: tweet_body`:

```
piyushjha :: Learn how to bring it all together with NPM this upcoming Friday, June 7th on #NICETalks!
Tune in at 1pm EST here… https://t.co/SXgsnWLlfj


hswolff :: @wycats rm -rf browser
npm install —global react


harlanji :: RT @jedschmidt: building react into the browser, worst idea since building npm into node. https://t.co/F60vxzcIvl


node_developer :: Understanding NPM - Node.js Package Manager

☞ https://t.co/hq4xn1vjW5

#nodejs #javascript https://t.co/9YISp84ppc

```

EmberWithRails
==============
This README outlines the details of collaborating on this this application.

A short introduction of this app could easily go here.

## Prerequisites

* Ruby
* Rails
* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)


## Installation

First of all install the Node
```
sudo apt-get update
sudo apt-get install nodejs

sudo apt-get update
sudo apt-get install -y \
git \
build-essential \
curl \
wget
```

### NVM Install script

To install you could use the [install script][2] using cURL:

    curl https://raw.githubusercontent.com/creationix/nvm/v0.15.0/install.sh | bash

or Wget:

    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.15.0/install.sh | bash


<sub>The script clones the nvm repository to `~/.nvm` and adds the source line to your profile (`~/.bash_profile`, `~/.zshrc` or `~/.profile`).</sub>

You can customize the install source, directory and profile using the `NVM_SOURCE`, `NVM_DIR` and `PROFILE` variables. Eg: `curl ... | NVM_DIR=/usr/local/nvm bash` for a global install.

<sub>*NB. The installer can use Git, curl, or wget to download NVM, whatever is available.*</sub>


To activate nvm, you need to source it from your shell:

    source ~/.nvm/nvm.sh

I always add this line to my `~/.bashrc`, `~/.profile`, or `~/.zshrc` file to have it automatically sourced upon login.
Often I also put in a line to use a specific version of node.


`nano ~/.bashrc`

and paste `source ~/.nvm/nvm.sh` anywhere is file `ctr+x` save.

`nano ~/.profile`

and paste `source ~/.nvm/nvm.sh` anywhere is file `ctr+x` save.


###Ember CLI

Once you’ve installed Node, you’ll need to install the Ember CLI globally with:

`npm install -g ember-cli`

This will give you access to the ember command-line runner.


###Bower

You’ll need to install Bower, a package manager that keeps your front-end dependencies (including JQuery, Ember, and QUnit) up to date. This is as easy as running:

`npm install -g bower`

This will give you access to the bower command-line runner.

###PhantomJS

By default, your integration tests will run on PhantomJS. You can install via npm:

`npm install -g phantomjs`


###Cloning an existing project

* `git clone https://github.com/ahmadhasankhan/StartedEmber.git` this repository
* change into the directory frontEnd
* `npm install`
* `bower install`
* `npm install broccoli-merge-trees`
* `npm install broccoli-static-compiler`
* `ember server`
* Visit your frontend app at http://localhost:4200.


* change into the directory backEnd
* `bundle install`
* change the database.yml cinfiguration
* `rails s`
* Visit your backend app at http://localhost:3000.

### From scratch


## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Refrences
* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com
* creationix/nvm:  https://github.com/creationix/nvm

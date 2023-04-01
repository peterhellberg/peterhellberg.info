.PHONY: deploy
deploy:
	rsync -avze 'ssh -p 22' --exclude '.git' --exclude 'Makefile' --delete ./ peter@peterhellberg.info:/var/www/peterhellberg.info/

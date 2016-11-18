### Welcome!

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Welcome to Me - A personal website

Check it out at: https://zoes-website.herokuapp.com/

The best part about creating a basic personal website is the fruitful plethora of resources available to you on the web! I decided to use Bootstrap (which has a lot of styling and shared components you can use), reactjs, and a few other things to help me get started. I always find that the toughest part about a website like this is coming up with reasonable content and then tackling it piece by piece. It won't look like amazing at first, so give yourself time to learn your way around the code before beautifying!!

Feel free to ask me questions as you go or just poke around and see what you like. Here are some notable things:

### Bootstrap Nav etc

If you're going to use Bootstrap, you need to run these commands to add it to your app:
```
npm install react-bootstrap --save
npm install bootstrap@3 --save
```
Then you need to import the css into your app by adding these lines to your index.js file:
```
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
```
(example [here](https://github.com/zsobin/zoes-website/blob/master/src/index.js#L5-L6))

The bootstrap nav is easy to use and looks great. You can see it in the code [here](https://github.com/zsobin/zoes-website/blob/master/src/js/App.js#L20-L29).

If you're interested, you can check out some more offerings from Bootstrap [here](http://getbootstrap.com/css/).

### Icons
All my sweet social icons came from FontAwesome, which is a super easy to use and free service.
Just add the stylesheet import it to your page's `<head/>`.
```
<script src="https://use.fontawesome.com/dd33737fc7.js"></script>
```

(Example [here](https://github.com/zsobin/zoes-website/blob/master/public/index.html#L6).)

You can check out all of FontAwesome's icons [here](http://fontawesome.io/icons/).

### Git Commit

When you make some changes, remember to commit and push them up to master. That will make your changes deploy automatically to your Heroku site.

- `git add .`
- `git commit -m "made a change"`
- `git push origin master`

### Simple first steps

- Go to App.js and replace my name with yours so it appears in the title of tab.
- Replace my bio with yours in About.ejs. Maybe even insert a photo!
- Add another project to my projects page! Just copy and paste one of the `<div class="project-container">`s and change the text/image!
- Do you have Instagram? Facebook? Find the FontAwesome icon of your choice and add a link to whatever account you want in the contacts page (also maybe change the other links too lol)
- Do you have hobbies? Want to add your resume? Add another tab to the nav!

Good luck, ask for help, and google away!

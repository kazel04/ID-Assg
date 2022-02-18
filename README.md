#Psyche

Interactive Demo Website for a Mental Health Chatbot Assistant

This website was developed to gain the attention of youths who are looking to try out the mental health chatbot assistant through the usage of animations, demo images and interactive chatbots. 

The key goal of the website is to encourage youths as well as organisations to try out the chatbot themselves by signing up for a free trial account.
A secondary purpose is to inform users about the purpose of the new social project, Psyche, as well as provide the means for users to send enquiries about the social project.
 
## Design Process
 
The website is catering to users who want to know more about the social project, most likely mental health professionals, journalists and youths.
These users would want to understand more about the project and learn about the vision and purpose of the project.

Hence, the website's content is designed to meet the needs and expectations of these different groups of users and displays the purpose of the social project through non-text means.

For example, smooth and futuristic animations such as circular particle movements and bright primary colours place emphasis on the future-oriented aspect of the project.
Meanwhile, the homepage utilises a mixture of two animations edited from open source designs in order to convey the image of candlelights among a bed of stars.
These designs have a subliminal message of hope, futurism and human warmth.

The key value that the website is providing to users is an interactive and non-conventional explanation on what the Psyche social project is through the use of aesthetic features and short summaries.
These short summaries are included in the mainpage section of the website which links to additional webpages which contain more detailed information about specific aspects of the project. 
These aspects include the vision, team, current work and contact information.

To facilitate requests for more information from users, the contact page also links out to a seperate form for users to send their enquiries to the project organisers.

A few user stories are included here:
- As a student interested in mental health, I want to look through the website to find out what the social project is working on, so that I can further understand what the social project is contributing to Singapore's mental healthcare system.
- As a journalist covering new technologies, I want to understand the new technologies that the project is developing so that I can understand the technologies used for mental healthcare today which would help with my reporting and articles.
- As a student who is looking into volunteering opportunities, I want to look through the website's vision page to understand whether the project's goals align with mine, and find out how I can contact the organisation for volunteering.
- As a student who is interested in trying out this service, I can try out a mini version on the main webpage and create a free trial account with random perks on the Order Page to get access to the full version and be updated on future developments
- As a school teacher or counsellor who is interested in allowing my students to try out this service,I can sign up for a free Organisation trial account on the Order page.

Wireframe for the project is in this repository as Assg2_wireframe.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included as a pdf file in the project itself (in an separate directory)
Include the Adobe XD wireframe as a folder. You can include the XD share url. 

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Chatbot - allows users to interact with a chatbot to find out more about mental health 
- Lucky Boxes- allows users to click on lucky boxes to earn prizes
- Signup Form- allows users to Sign up using a form to become a member 
- Enquiry Form- allows users to fill up an enquiry form to ask questions
- Interactive particle text - Allows users to interact with the particle animation and get an idea of our core technologies used as well as future-oriented work.
- Click-To-Scroll - Provides an unorthodox way for users to scroll through the sections of the mainpage, making the website more memorable
- Responsive Navigation Menu - Allows users to navigate around the website
- Short Summaries - Provides users with a simple summary of the different aspects of our work and an option to learn more
- Main Content Pages - Provides more information on the different areas of our work

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Interactive demo with a virtual avatar

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.


.API

https://docs.kommunicate.io/docs/web-installation.html, API will be used to link the Chatbot and for Firebase storage and Firebase authentication to the website

.Javascript

https://www.javascript.com/, Javascript will be used to consruct the back end of the website 

.CSS

https://www.tutorialspoint.com/css/index.htm, CSS will be used to design the website 

.HTML

https://developer.mozilla.org/en-US/docs/Web/HTML, HTML will be used to construct the structure of the website

.Ajax

https://www.keycdn.com/support/ajax-programming, AJAX will be used to help simplify the making of the website

Firebase API:
https://firebase.google.com/docs/storage/web/start#web-version-8, Firebase storage used, with database link for each image used as the source

https://firebase.google.com/docs/auth/web/start, Firebase authentication used, with auth sign up and checks.

Kommunicate API:
https://docs.kommunicate.io/docs/web-installation.html, Kommunicate API used to link google dialogflow chatbot demo to the website

Google Dialogflow API:
https://cloud.google.com/dialogflow/es/docs/reference/rest/v2-overview, Dialogflow used to create chatbot and linked to the Kommunicate API within the Kommunicate interface

## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.
  
2. Signup form:
    1. Go to Signup form
    2. Try to Submit form without a Name (Cannot Submit)
    3. Try to Submit form without a Surname (Cannot Submit)
    4. Try to Submit form without a Valid email address (Cannot submit)
    5. Try to Submit form without a Valid Password (Cannot Submit)
    6. From the above testing the Signup Form is working as unless the users fills up all the required pats, they cannot submit it.
   
3. Clicking on the Different Sections
    1. Go to the Index Page
    2. Try to Click on different Sections (Was able to)
    3. From the above testing, the links are working
    4. Try out if the links work based on different screens.
  
4. Animations 
    1. Go to the Main Page and ensure the animation is working based on interactions
    2. Go to the Subpages and ensure that the Text animation and the background animation is working
    3. Click on the Main Page and ensure the following pages animation are working
    4. Try out if the animation works on different screens such as Yuan Yee's screen.

5. Chatbot
    1. Click on the Chatbot's widget on the main webpage
    2. When prompted by the Chatbot to type 'Yes, i agree', ensure that sentence must be typed (Working)
    3. Ensure the chatbot is able to have a conversation with the user and is working (Working)
    4. Try out if the chatbot can work in different screen sizes


6. Tab Menu (Order Page)
    1. Click on the Tab Menu in the Order Page
    2. Click on the 'Organisation' tab and ensure that the animation is working
    3. Click on the 'Individual' tab and ensure that the animation is working
    4. Ensure that the same animations work on Yuan Yee's screen (a different screen size/device)

7. Lucky Boxes (Order Page)
    1. Click on the Lucky Boxes in the Order Page, under the individual tab menu
    2. Ensure that the animation and random generation of perks are working when clicked
    3. Ensure that an opened box cannot be opened again
    4. Ensure that the animations work in other devices such as Yuan Yee's device



In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Credits

### Content
-Main Page Text Animation: https://codepen.io/Mamboleoo/pen/obWGYr

-Chatbot API: https://docs.kommunicate.io/docs/web-installation.html + https://cloud.google.com/dialogflow/es/docs/quick/api#detect-intent-text-drest

-Lucky Box Game: https://codepen.io/Gigabait/pen/jOEErjr

-Tab Menu: https://codepen.io/derekjp/pen/pPqwXJ

-Firebase API For Signups: https://medium.com/@bariskarapinar/firebase-authentication-web-app-javascript-3165ebc92b68

-More Info Popup Button: https://codepen.io/kucznierzm/pen/KKaypgd

-Firebase Storage API: https://firebase.google.com/docs/storage/web/download-files

-Enquiry Form: https://codepen.io/webdvz/pen/gjLyRG

-Orb Particle Animation: https://codepen.io/natewiley/pen/GgONKy

-Subpages background: https://codepen.io/mohaiman/pen/MQqMyo

-Subpages Text Alternating Colors: https://alvarotrigo.com/blog/css-text-animations/

- The text and images are all from myself (except for form page icons)
- Animations and form are improved upon and modified from open source code from Codepen
- Form page icons are from Material+Icons

### Media
- Lottie Animations for Vision Subpage: https://lottiefiles.com/50724-chatbot, https://lottiefiles.com/94994-loading-car

- Lottie Animations for Team Subpage: https://lottiefiles.com/72259-team

- Lottie Animations for Partners Subpage: https://lottiefiles.com/73195-business-partnership-contract-handshake

- Lottie Animations for ContactUs Subpage: https://lottiefiles.com/70229-contact-us
- 
- The assets used such as the heart notch and triangles were created from Adobe XD.

### Acknowledgements

- I received inspiration for the Order page from the Tesla ordering webpage: https://www.tesla.com/model3/design
- This website references open source code from multiple source, and all open source are modified and improved upon.
Some modifications and improvements made would be the fusion of multiple pieces of code, altering the colours and rotation of the animations, expanding or reducing the size of certain designs and many more other edits.

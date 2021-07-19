## Technical Task

I have completed the task, I would have made a few changes if I had felt a bit more confident with the use of typescript. I have mentioned these places in the code comments.

The logic I used for breeding sheep was fairly straight forward.
1. The two sheep must be male / female combination.
2. Branded sheep could not be selected for breeding.

At the top of the page is a simple form to create a new sheep manually. I have added some validation which follows:
1. Names cannot be repeated or an empty string.
2. I have set a default gender as to avoid null value issues.

The centre of the page is a very rudimentary field layout.
1. Female sheep have pink background.
2. Male sheep have a blue background.
3. Branded sheep have a green border.

Clicking on one of the sheep in the field with un-disable available actions at the bottom of the page.
1. If the selected sheep is not already branded, it can be branded.
2. There is a dropdown providing a list of sheep in the field that meet the criteria to be bred with.
3. Clicking the button to breed with have a 50/50 chance of generating a new sheep.
    3a. If the breeding fails, a short message will appear at the bottom saying it was unsuccesful.
    3b. If it succeeds, then a new sheep will appear in the field with a randomly selected gender and the name is derived from its index.

This is by no means a finished product, there are several flaws with it, (lack of alerts for bad input etc, you are currently able to flood the page with sheep, styling is very rudimentary) but is a representative of what I can put together in a 4 hour window.

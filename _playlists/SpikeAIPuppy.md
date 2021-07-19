---
layout: post
title: SPIKE Prime AI Puppy
displayimg: web/img/PuppyCover.png
description: This playlist includes a series of lessons focused on training a SPIKE Prime puppy through the use of various artificial intelligence algorithms including nearest centroid classification, K-nearest neighbors, linear regression, and reinforcement learning.
---
<div class="learninggoals" markdown="1">
# Learning Goals
While working through this playlist, students will develop their coding and engineering skills by designing their own interactive projects that utilize the fundamentals of artificial intelligence and machine learning. Students will design machine learning training sets, collect and evaluate data, anticipate machine reactions, and develop multi-step systems that successfully interact with users. By developing systems that can be quantitatively and qualitatively tested for functionality, students will work across a variety of academic disciplines to meet specific design criteria and constraints. Students will be provided specially developed classes and functions, giving them the opportunity to recognize patterns while exploring existing code. Students will also work with APIs to send and receive data, and develop their own commands and functions in MicroPython.

</div>

<div class="learninggoals" markdown="1">
# Notes
For an introduction to some common artificial intelligence algorithms, see this brief supplementary [playlist](https://ceeoinnovations.github.io/RoboticsPlayground/playlists/AI_Algorithms.html).

The code class files with relevant functions are included on each placemat, but the [GitHub](https://github.com/ceeoinnovations/SPIKE_AI_Puppy) repository also includes example codes as supplemental materials for students who may prefer more guidance than what is provided on the placemats. These example files show potential applications of the functions defined in the training files, as well as which areas of the code need to be changed or filled in with relevant commands based on the construction of a student’s specific puppy.

Each lesson in this playlist also includes a demo video, showing the puppy being trained and demonstrating its trained behaviors. Although not all puppies will have the same reactions, the goal of these videos is to provide a visual demonstration of what each lesson’s AI method can accomplish.

</div>

===
title
: AI Lesson 1: Sit

description
: This lesson utilizes Nearest Centroid Classification to train the puppy to learn commands for sit and stand, based on how far your hand is from the distance sensor. Once trained, the puppy will be able to sit and stand based on your commands.

placematlinks
: [Placemat Link](https://docs.google.com/presentation/d/1UR_DQkpuBaJWDXFj7jMlrF5njVUwg9hvgi2SiHq_-gQ/edit#slide=id.gb8126a8c55_0_90)

placematpic
: ../web/img/PuppyLesson1Front.png

gallery
: <iframe src="https://drive.google.com/file/d/16mJkCcl9dau4a5rHhChoVNXH_QhvDl69/preview" width="640" height="480"></iframe>

===
===
title
: AI Lesson 2: Pet the Puppy

description
: This lesson uses a 1-dimensional K-Nearest Neighbor (KNN) algorithm to train the puppy to learn the difference between a “pat” and a “stroke”. Once trained, the puppy will react differently to a short press (pat) and a long press (stroke) of the force sensor.

placematlinks
: [Placemat Link](https://docs.google.com/presentation/d/1je-fzaUMyjK8FQvnuY2Yvd0uZLm0-lYTxM7qNJnq5eY/edit#slide=id.ge3d79526d7_0_91)

placematpic
: ../web/img/PuppyLesson2Front.png

gallery
: <iframe src="https://drive.google.com/file/d/1_w9CHn7GQcPjnx6uVbYyffCT0aCLXsxw/preview" width="640" height="480"></iframe>

===
===
title
: AI Lesson 3: Picky Eater

description
: This lesson also uses a KNN algorithm like lesson 2, but this time it is 3-dimensional, so it compares more values. Using this algorithm, the puppy can be trained to recognize “foods” of different colors and react accordingly. Once trained, the puppy will react positively to various shades of one color, and negatively to shades of a different color, depending on what it was trained with. 

placematlinks
: [Placemat Link](https://docs.google.com/presentation/d/17kUr2bXnRiifOLSbBnB5BNrdE5JjLImObAXUMQLmXkg/edit#slide=id.ge4342160e1_0_90)

placematpic
: ../web/img/PuppyLesson3Front.png

gallery
: <iframe src="https://drive.google.com/file/d/18EOmMYHGeHQbn-Mql_1NuCQG3iw72e24/preview" width="640" height="480"></iframe>

===
===
title
: AI Lesson 4: Fetch

description
: This lesson gives students the opportunity to implement one of two different algorithms: Linear Regression or Reinforcement Learning. Both approaches allow the puppy to be trained to determine how long to move forward, according to a desired distance. Once trained, the puppy will be given a distance value, either using the ultrasonic sensor or manual input, and can use the implemented algorithm and its training to determine how long it should move forward in order to reach the target distance. 

placematlinks
: [Placemat Link](https://docs.google.com/presentation/d/18e0KlM8rbYiJMf5pchH8Domn1UIcuzo6sTm7Fg4RgSI/edit#slide=id.ge2b5783bb5_0_90)

placematpic
: ../web/img/PuppyLesson4Front.png

gallery
: <iframe src="https://drive.google.com/file/d/1Yd88vIqh-2qdg7z77tX_542oW6LKrauY/preview" width="640" height="480"></iframe>

===

import React from 'react';

export default function About() {
  return (
    <div>
        <div className='aboutMainDiv'>
            <div>
                <h1 className='aboutHeader'>About</h1>
                <h2>Hello, my name is Kelsey Jackson. Im am in the process of training to hopefully one day becoming a front end web developer! This was a project from Mimo Developer program. I was a student of Cohort 8. This is my version of the Baby Names Project!</h2>
            </div>
            <div className='profilePictureDiv'>
                <img className='profilePicture' src='https://lh3.googleusercontent.com/-y5LQA9CScz01_x_wucg__R6P0i_IF6ryXdr2jRDroIoLXgEoqd4QudwsH87F0rqasCYb13DqmC4Cpi_OY1qN7Pb6eyFbxErbQcRWEhTkBUxoIOd188Pu4X_oLwhFJuGdRGlHdT3k1Jz8pIHTCvhe-qlNB5rLcKwHfMtmfPi8WBKsIpPYV-jtjakDLHnC0vCt-YyIsh-TyPk88eKnfTGvnrI_Q6XU5uCrT8LQ7xJitsKnb6vzg4PF7_PLeE3ZZkaq1ZmHQ56hoZ0lWwyvOiJXqqP5hnpUz067me5cgj6ytG4EWvXe7fYz3TFzL0m2v7jm_K0QO785Wfwejcn1mNIpg7uTpdTwYpYWm3WG161LjNqCakda3PD6iaKSeoC2pbhisyltK6cuM_QgrR1yU1THCPRSsROpdOgiRRSZugIOlLrHZ64DuxaX0Yia9yDpkk9txkbDzhKK27l4RSnk6KtGWnW9I6KHjIhKdl0a_HSdsu2ELNC5AKMA4bRjqtRhXta9VVDZSjlm9iObqFbdKdi9AfF0TlLbVdvVkSwezZqQzrmMmf19Z79lcw1Wab6LR1X-JhIuILStntZZWwsd-JvBgm1SqRtiQG4fhYn8cuW1xO1CzwHtQUhHOdAkxGTeA2eLG0gw4NgEeHnQY8X2Pwp674WqdpOp4ubIZIZh1617zOzFtvQQ4R4T5WO3vd1fn0b0qFw7098eQFUd1HF0ilMW923VSTyr9X9WuxU6Y7S4VFPJLnjU6sNNboWhelaF9o9tx7TWCxWW2av8Y04xchMcxOu7QoMNZVZ9K250PMlxf7kzoPZBpXVrtbHNx9XjzgAYrY4zV9AFpqqzH4fqRuH_M-QHLoN-03RwKvj5FoBOYzcEoOEWOntFFLhwX4Dkq1gaylcaIqqkD9Ewv-uBKBRyD-5TVJaWZ7ySxfel_4=w522-h696-no?authuser=0' alt='profileImg' />
            </div>
        </div>
        <div className='aboutDesDiv'>
            <h3>Check out the contact page! You can send me a submission to add a new name and give your thoughts! Thank you for visiting!</h3>
            <div>
            <a href='https://twitter.com/kjacks540'><strong className='twitterLink'>Twitter <i className='fa-brands fa-twitter fa-xl'></i></strong></a> 
            <a href='https://github.com/kelso540'><strong className='gitHubLink'>GitHub <i className='fa-brands fa-github fa-xl'></i></strong></a>
            </div>
        </div>
    </div>
  )
}

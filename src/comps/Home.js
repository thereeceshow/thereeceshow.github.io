import React from 'react'
import { Link } from 'react-router-dom'
import Blogpost from './Blogpost'

export default function Home() {

    let posts = [
        {
            genre: 'Bootcamp',
            title: 'Week 3',
            content: [
                'Tuesday I spent some time pondering the existence of the For Loop... because it seemed just as simple to use a While Loop and increment and iterator in the loop',
                ['The rest of the week we started to put the HTML, CSS, and Javascript concepts we learned to the test, and started using them together. I read during this time to illistrate the roles of each part, to compare each \"Language\" of the Website to a \"Part of Speech\", the ', <em>HTML</em>,' is the ', <strong>Noun</strong>, ' the ', <em>CSS</em>,' is the ', <strong>Adjective</strong>, ' and the ',<em>JavaScript</em>,' is the ', <strong>Verb</strong>], ' MDN would be a primary dictionary, and we would use W3Schools as our backup.'
            ],
            postDate: '2021-02-11'

        },
        {
            genre: 'Bootcamp',
            title: 'End of Week 2',
            content: [
                'We have just finished week 2 of our pre-work. Everyone on Team Hopper had good presentations today for our strangely similar Splash page\'s.  We had a good talk about uses of Dev Tools and the Document Object Model, or DOM. We got into talking about the ethics of viewing, borrowing, and using other\'s code.  Justin and Ian spoke about learning to write code by writing code is much better than not learning to write code by copying code.',
                ['That reminded me of a story I read in ', <a href="https://www.amazon.com/Flash-Boys-Wall-Street-Revolt/dp/0393351599">Flash Boys by Michael Lewis</a>, ' where it talks about why Russia was producing some of the best programmers ever. In the West, students had tons of access to computers, but didn\'t code as well as the Russians who had limited Machine Time.'],
                'Because the Russian programers may only have an hour or so time on the actual computer a week, they wrote all their code out on paper, and debugged it in their minds. Not talking about pesudocode either. This was precise, perfect syntax, and everything. They also didn\'t have Stack Exchange to look anything up either...',
                [<em><strong>Scarce resources are valuable.</strong></em>],
                'Thinking about that story makes me think I need to reconsider just how valuable pseduocode can be, especially as we add more and more layers and complexity to our projects.',
                'If you aren\'t familiar with Flash Boys, check it out. Its the story of how some coders changed Wall Street (and not in a good way), long before Reddit, and Robinhood.'
            ],
            postDate: '2021-02-05'

        },

        {
            genre: 'Bootcamp',
            title: 'Day 1',
            content: [
                'I learned there is a lot to learn.  We started off jumping into some tools.  Git, GitHub, MarkDown, the Terminal, or the Command Line Interface (Bash and Zsh).  We were warned to prepare to fail.  The goal of the bootcamp was to make us fail.  It was important for growth.  MD (MarkDown) is a pretty cool new markup language to learn.'
            ],
            postDate: '2021-01-25'

        }
    ]



    return (
        <div className="container-fluid">
            <h1 className="my-5">Reece Walter - Dev Blog</h1>
            {posts.map(el =>
                <Blogpost
                    genre={el.genre}
                    title={el.title}
                    content={el.content}
                    postDate={el.postDate}
                />)}
        </div>
    )
}

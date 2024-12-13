<script lang="ts">
    import { Container, Header, Column, Image, Link } from "svelte-fomantic-ui";
    import roy from "../assets/roy.jpeg"

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column four wide>
        <Image ui src={roy}/>
        <span style="font-style:italic">Dr. Roy C. Davies</span>
    </Column>
    <Column twelve wide justified>
        I've moved regularly between the academic and commercial worlds for three and half decades now.  My PhD work was on the Usability of Virtual Reality for brain injury rehabilitation and participatory design.  This was in the '90s and 00's, the early days of VR.
        <br><br>
        Sometimes, students, especially those with English as a second language, call me 'Dr. Roy' rather than 'Dr. Davies'.  I kinda like it, so I don't discourage it - it's both formal and informal at the same time, but I generally just prefer 'Roy'.
        <br><br>
        I've built a few companies, and together with my academic experience, I've grown a deep understanding of how to grow strong ideas for both commercial and academic purposes.  This is my key driving force - to help people to learn how to grow strong ideas.  Anybody can do it with a bit of training - something I've learned working for academyEX.
        <br><br>
        There are several tasks that keep me occupied.  First and foremost, there is my family, which sits above all else.  My day job is as a Senior Technician at the Smart Digital Lab in the University of Auckland, Department of Civil and Environmental Engineering.
        I have a few side hustles - consulting tasks that allow me to impart my knowledge and experience to others (and promote the strong ideas methodology).  In particular I work with academyEX where I advise Masters students, and a few startups where I act as a 'Technology Friend' - helping people to understand and work with technical teams.
        <br><br>
     </Column>
    <Column sixteen wide justified>
        <Header ui h4 inverted>Growing strong ideas</Header>
        What is a strong idea?  We often think of ideas as 'good' or 'bad', evaluating them based on our personal values.  But before that, we need to grow an idea to its full strength, finding all its weaknesses, and casting aside those that are not strong enough.
        In science, this is called 'conjecture and refutation', and was first formulated by Karl Popper.  A similar technique is used in open-source communities with the pull-request process, and in business with the lean startup methodology.
        <br><br>
        Common to these is the need to formulate an idea, then test it to breaking point.  The idea is conjectured, then we work hard to attempt to refute it.  If it continually survives, it is a strong idea.  If it does not, we learn from the experience and try again.
        <br><br>
        In refuting ideas, it is critical that a wide range of viewpoints are covered.  Ideally this is done by a diverse group of people with a variety of world views and backgrounds.
    </Column>
    <Column sixteen wide justified>
        <Header ui h4 inverted>A new technology paradigm - mixing realities</Header>
        The world is going through a paradigm shift in technology.  We are transitioning from the information age to the intelligence age.  Further, the nature of our interactions with technology is changing.  Now, technology is more able to communicate with us in ways that are natural to human beings.
        This means that we are finally moving away the desktop metaphor to the objects and actors metaphor.  This is part of spatial computing, meaning that intelligent devices and virtual entities are all around us, working with us in a supportive, augmenting manner.
        <br><br>
        At least, that is the dream.  Humans, of course, will find interesting and inventive ways to pervert this ideal, so active work in ethics, privacy and security is necessary.
    </Column>
    <Column sixteen wide justified>
        <Header ui h4 inverted>Universal design (and calm technology)</Header>
        A promising area is the use of emerging technologies for assistive devices.  This is a natural fit, as the technology is able to adapt to the user, rather than the user having to adapt to the technology.  All people, regardless of physical and cognitive capability, should be able to take part in society as equals.  Alas, today, that is not so, but adaptive and adaptable calm technologies may be part of the answer.
        <br><br>
        Universal design is often touted as a way forward, but in reality, it is impossible to design for all.  However, with care, we can design for the majority, and technology can adapt itself to meet the needs and preferences of the individual.
    </Column>
    <Column sixteen wide justified>
        So, that's me in a few paragraphs.  The rest of this website has more detail - I hope you find it interesting and inspiring.
    </Column>
</Container>

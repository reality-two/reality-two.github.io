<script lang="ts">
    import { Container, Column, Text, Divider, Link } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Reality2 - The framework for the Objects and Actors Metaphor.</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            Reality2 enhances wearable and stationary devices with Sentient Digital Agent intelligence, using contextual information to create adaptive, intuitive interactions. This approach simplifies usability and supports the ‘Objects and Actors Metaphor.’
        </Text>
        <Divider ui/>
        <Text ui large>
            We humans naturally build <Link href="https://simplyputpsych.co.uk/psych-101-1/what-is-a-schema-in-psychology" target="_blank">mental frameworks</Link> to understand the complexities of the world around us. These simplified representations help us make sense of new information by drawing parallels with what we already know, often using metaphors. In the context of tools, these metaphors shape the <Link href="https://www.researchgate.net/publication/267487031_Metaphors_in_Conceptual_Design" target="_blank">interaction between designers and users</Link>.
        </Text>
        <Divider ui/>
        <Text ui large>
            Well-designed tools reflect human understanding and capabilities—this is the essence of <Link href="https://calmtech.com/" target="_blank">‘Calm Technology’</Link>. Take a hammer, for example: its weight and shape naturally guide our actions without us having to think too much. This metaphor (based on <Link href="https://www.researchgate.net/publication/323773021_'Affordance'_-_what_does_this_mean" target="_blank">natural affordance</Link>), embedded in physical tools, has been crucial in designing digital technologies as well.
        </Text>
        <Divider ui/>
        <Text ui large>
            Consider that most people don’t fully understand how a mobile phone works or the networks that power it. Yet, the device is (mostly) intuitive to use. In computing, the <Link href="https://en.wikipedia.org/wiki/Desktop_metaphor" target="_blank">Desktop Metaphor</Link> has helped users visualize a computer’s functions through familiar concepts like icons and files. Mobile devices (as portable computers) continue this with this metaphor.
        </Text>
        <Divider ui/>
        <Text ui large>
            Now, with <Link href="https://en.wikipedia.org/wiki/Spatial_computing">spatial computing</Link> and <Link href="https://en.wikipedia.org/wiki/Mixed_reality">Mixed Reality</Link>, we are outgrowing these traditional metaphors. As we use multiple devices throughout our day, interacting with them through natural language and gestures, we’re entering a new paradigm: the ‘Objects and Actors Metaphor.’ This shift reflects how technology seamlessly blends into our lives, making interactions feel as natural as engaging with the physical world.
        </Text>
        <Divider ui/>
    </Column>
    <Column sixteen wide centered>
        <Text ui big>As intuitive as picking up and throwing a ball; as human as having a conversation.</Text>
    </Column>
</Container>

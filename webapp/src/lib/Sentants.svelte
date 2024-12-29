<script lang="ts">
    import { Container, Column, Text, Divider } from "svelte-fomantic-ui";
    import Link from "svelte-fomantic-ui/src/lib/elements/Link.svelte";

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Sentient Digital Agents, your champions and protectors in a fraught world.</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            The core of Reality2 is built on Sentient Digital Agents, or ‘Sentants,’ which are small, independent elements that can sense the digital and physical environments around them. These Sentants, also known as ‘Bees,’ can work together in ‘Swarms’ to achieve complex tasks.        </Text>
        <Divider ui/>
        <Text ui large>
            Sentants can be programmed with specific ‘Behaviours’ and have their functionality extended using ‘Plugins’ or ‘Antennae,’ continuing the bee metaphor. A key guideline is that data is stored close to its source (with encrypted backups as needed). This means your data is literally ‘on you’—in the devices you wear and carry. And don’t worry, if you lose these devices, others won’t be able to access your personal information.
        </Text>
        <Divider ui/>
        <Text ui large>
            Each Sentant (or Bee) has a range of properties:
            <ul>
                <li><strong>Programmable</strong>: It can be customized to perform specific tasks.</li>
                <li><strong>Immutable</strong>: Once created, it cannot be changed.</li>
                <li><strong>Persistent</strong>: It continues to exist and function until removed.</li>
                <li><strong>Unique</strong>: Each one is one-of-a-kind.</li>
                <li><strong>Consistent</strong>: It behaves the same regardless of the visualizer.</li>
                <li><strong>Context-Aware</strong>: It is aware of its environment and adapts accordingly.</li>
            </ul>
        </Text>
        <Divider ui/>
        <Text ui large>
            Sentants are set up by loading a script onto a Reality2 Node. These scripts can be exchanged with others to share functionality, even building up entire libraries of capabilities. When Sentants work together in Swarms, they bring the ‘Objects and Actors’ metaphor to life, creating an emergent, dynamic experience in Reality2.
        </Text>
        <Divider ui/>

<!--         
        <Divider ui/>
        <Text ui large>
            The core of Reality2 is its functionality built on many small, independent elements called 'Sentient Digital Agents' that can sense the digital and physical environments around them.
        </Text>
        <Divider ui/>
        <Text ui large>
            We also call Sentants 'Bees', that can work together in 'Swarms'.  Sentants can be programmed (given 'Behaviours') and have their functionality extended using 'Plugins' or 'Antennae' using the bee metaphor.
        </Text>
        <Divider ui/>
        <Text ui large>
            A key guideline is that data is to be stored close to its source (with encrypted backups elsewhere as required).  This means that your data is quite literally 'on you', in the devices you wear and carry.  But don't worry, if you lose them, others won't be able to access your personal information.
        </Text>
        <Divider ui/>
        <Text ui large>
            Each Sentant (or Bee) has a range of properties, namely it is: Programmeable, Immutable (can't be changed once created), Persistant (exists and 'runs' until it is removed), Unique (only one in the world) and Consistent (it is perceived the same regardless of the visualiser).
        </Text>
        <Divider ui/>
        <Text ui large>
            Sentants / Bees are set up through loading a script to a Reality2 Node.  These scripts can be exchanged with others to <Link href="https://github.com/reality-two/reality2-definitions" target="_blank">share functionality</Link>, and even build up whole libraries of capability.
        </Text>
        <Divider ui/>
        <Text ui large>
            Swarms of Sentants on Reality2 nodes have the emergent property of the 'Objects and Actors' metaphor.
        </Text>
        <Divider ui/> -->
    </Column>
    <Column sixteen wide centered>
        <Text ui big>Sentants intelligently act on your behalf without giving away too much.</Text>
    </Column>
</Container>



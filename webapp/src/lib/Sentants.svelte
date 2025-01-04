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
            Sentants can be programmed with specific ‘Behaviours’ and have their functionality extended using ‘Plugins’ or ‘Antennae,’ continuing the bee metaphor. A key principle is that data is stored close to its source (with encrypted backups elsewhere as needed). This means your data is literally ‘on you’—in the devices you wear and carry. But don’t worry, if you lose these devices, others won’t be able to access your personal information.
        </Text>
        <Divider ui/>
        <Text ui large>
            Each Sentant (or Bee) has a range of properties designed to both protect and simplify:
            <ul style="line-height: 1.4;">
                <li><strong>Immutable</strong>: Once created, its core cannot be changed.</li>
                <li><strong>Programmable</strong>: It can be customized for specific tasks.</li>
                <li><strong>Unique</strong>: Each one is distinct and one-of-a-kind.</li>
                <li><strong>Consistent</strong>: It behaves the same no matter how it is viewed.</li>
                <li><strong>Extensible</strong>: New features can be added through third-party plugins.</li>
                <li><strong>Persistent</strong>: It remains active until it is removed.</li>
                <li><strong>Interactive</strong>: It communicates by sending and receiving messages.</li>
                <li><strong>Opaque</strong>: Without your personal keys, encryption keeps access limited.</li>
                <li><strong>Adaptive</strong>: It understands its environment and adjusts accordingly.</li>
            </ul>
        </Text>
        <Divider ui/>
        <Text ui large>
            Sentants are set up by loading a script onto a Reality2 Node. These scripts can be exchanged with others to share functionality, even building up entire libraries of capabilities (see the Marketplace tab above). When Sentants work together in Swarms, they bring the ‘Objects and Actors’ metaphor to life, creating an emergent, dynamic experience in Reality2.
        </Text>
        <Divider ui/>
    </Column>
    <Column sixteen wide centered>
        <Text ui big>Sentants intelligently act on your behalf without giving away too much.</Text>
    </Column>
</Container>



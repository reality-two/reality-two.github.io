<script lang="ts">
    import { Container, Column, Text, Divider, Image } from "svelte-fomantic-ui";
    import theimage from "../assets/networks.png";

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Transient Networks, connecting devices without bother.</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            Reality2 is built on existing hardware and software infrastructure protocols, but reuses these in unusual ways to simplify the user experience to build the Objects and Actors metaphor.
        </Text>
    </Column>
    <Column sixteen wide justified>
        <Image ui src={theimage}/>
    </Column>
    <Column sixteen wide justified>
        <Text ui large>
            Digital authentication is one of life’s complexities. In the physical world, authentication is often built into the interaction itself. For example, when I pick up a ball, I don’t need to prove I can throw it—I’ll either be able to do it or not. Similarly, when I approach a display screen, I should be able to start my presentation with a simple flick of the wrist, without needing to connect cables or find the WiFi password.
        </Text>
        <Divider ui/>
        <Text ui large>
            When making a purchase, my Reality2-enabled devices should automatically grant permission, without needing to swipe cards or enter PIN codes. Simply being present in the moment should be enough. The intelligent use of context—who I am, what I’m doing, who I’m with—helps make this possible.
        </Text>
        <Divider ui/>
        <Text ui large>
            Transient Networks enable Reality2-powered devices to communicate seamlessly when they’re close together, without needing passwords, codes, or pairing. Each device has an ‘interactivity field.’ When these fields intersect, Sentient Digital Agents can interact. Authentication occurs at the agent level, not the network level.
        </Text>
        <Divider ui/>
        <Text ui large>
            Technically, this works through protocols like BLE, Bluetooth, and WiFi, and sometimes others like LoRa, to create proximity-based fields for Transient Networks.
        </Text>
        <Divider ui/>
    </Column>
    <Column sixteen wide centered>
        <Text ui big>Seamless and bother-less interaction between Reality2 empowered devices.</Text>
    </Column>
</Container>
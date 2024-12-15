<script lang="ts">
    import { Container, Column, Text, Divider } from "svelte-fomantic-ui";

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
        <Divider ui/>
        <Text ui large>
            One of life's complexities is digital authentication.  In the analogue world, this is much less common, with 'authentication' built into the very interaction itself.  I don't need to prove I can throw a ball before I pick it up, I will just be able to do it, or not.
        </Text>
        <Divider ui/>
        <Text ui large>
            Similarly, when I walk up to a display screen, I should be able to put up my slidedeck presentation with the flick of the wrist, without first having to wrangle cables or find out the WiFi password.
        </Text>
        <Divider ui/>
        <Text ui large>
            Or, when I want to purchase something in a shop, the Point of Sale machine should be able to get permission from the Reality2 enabled devices I am wearing or carrying without having to go through the complexities of swiping cards and PIN codes.
        </Text>
        <Divider ui/>
        <Text ui large>
            Me, just being there in that moment, should be enough.  The intelligent use of context (who I am, what I am doing, who I am with, what I typically do here, at this time, etc) is a powerful tool for building Calm Technologies.
        </Text>
        <Divider ui/>
        <Text ui large>
            Transient Networks allow Reality2 empowered devices to interact when they are close enough together without having to first connect with passwords, codes or pairing.
        </Text>
        <Divider ui/>
        <Text ui large>
            Imagine that each device has around it an interactivity field.  When fields intersect, the Sentient Digital Agents can interact.  So, authentication occurs at the Digital Agent level, not the network level.
        </Text>
        <Divider ui/>
        <Text ui large>
            Technically, Reality2 empowered devices use a combination of BLE, Bluetooth and WiFi (and sometimes other protocols such as LoRa) to implement the concept of proximity fields for Transient Networks.
        </Text>
        <Divider ui/>
    </Column>
    <Column sixteen wide centered>
        <Text ui big>Seamless and bother-less interaction between Reality2 empowered devices.</Text>
    </Column>
</Container>

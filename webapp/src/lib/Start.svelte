<script lang="ts">
    import { Container, Image, Column, Text, Divider, Button, Icon } from "svelte-fomantic-ui";

    import reality2bee from "../assets/reality2_big_bee.png";
    import Slidedeck from "./Slidedeck.svelte";

    export let page = "start";

    export let allImages: any;

    let counter = 0;
    
</script>
<Container ui grid stackable style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column seven wide>
        <Image ui src={reality2bee}/>
    </Column>
    <Column nine wide left>
        <Divider ui/>
        <Text ui big>Reality2 combines the immersive power of Mixed Reality with the seamless integration of Calm Technology, to create a harmonious blend of digital and physical worlds that respect privacy.</Text>
        <Divider ui/>
        <Text ui big>It enables intuitive, context-aware interactions, allowing people to engage naturally with virtual and real things, enhancing experiences whilst encouraging full presence in their surroundings.</Text>
        <Divider ui/>
    </Column>
</Container>
<Slidedeck folder="digital_glue" {allImages}/>

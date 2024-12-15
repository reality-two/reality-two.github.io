<script lang="ts">
    import { Container, Image, Column, Text, Divider } from "svelte-fomantic-ui";

    import reality2bee from "../assets/reality2_big_bee.png"

    export let page = "start";
    
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
    <Column sixteen wide justified>
        <div style="position:relative;width:100%;height:0;padding-bottom:56.25%;"><iframe allow="clipboard-write" allowfullscreen style="position:absolute; width: 100%; height: 100%;border: solid 1px #333;" src="https://www.beautiful.ai/embed/-OE5pKwSFj_Vi5TozAlV?utm_source=beautiful_player&utm_medium=embed&utm_campaign=-O0MY4WstyAK3Ster6of"></iframe><a href="https://www.beautiful.ai/embed/-OE5pKwSFj_Vi5TozAlV?utm_source=beautiful_player&utm_medium=embed&utm_campaign=-O0MY4WstyAK3Ster6of">View Reality2 - digital glue on Beautiful.ai</a></div>
    </Column>
</Container>

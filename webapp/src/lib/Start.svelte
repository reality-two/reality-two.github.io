<script lang="ts">
    import { Container, Image, Column, Text, Divider, Button, Icon } from "svelte-fomantic-ui";

    import reality2bee from "../assets/reality2_big_bee.png";
    import Slidedeck from "./Slidedeck.svelte";
    import Row from "svelte-fomantic-ui/src/lib/collections/Row.svelte";

    export let page = "start";

    export let allImages: any;
    
</script>
<Container ui grid stackable style="padding-top:50px;padding-bottom:0px;vertical-align:top;">
    <Row>
        <Column five wide>
            <Image ui src={reality2bee}/>
        </Column>
        <Column eleven wide left style="border-top: 1px solid #4B6E8F; border-bottom: 1px solid #4B6E8F; padding-top: 20px; padding-bottom: 20px; text-align: justify; text-justify: inter-word;">
            <Text ui big>Reality2 connects the digital and physical worlds through Mixed Reality and Calm Technology, powered by sentient digital agents (Sentants). These enable intuitive, context-aware interactions with objects and virtual entities that blend into your environment, enhancing engagement, protecting privacy, and helping you stay present in your surroundings and social interactions.</Text>
        </Column>
    </Row>
    <Row>
        <Column sixteen wide>
            <Slidedeck folder="digital_glue" link="https://www.beautiful.ai/player/-O7al3iulcpXDvP26FJH" {allImages}/>
        </Column>
    </Row>
</Container>

<script lang="ts">
    import { Container, Image, Column, Text, Divider, Button, Icon } from "svelte-fomantic-ui";

    export let allImages: any;
    export let folder="";

    // Import all images from the directory
    // const allImages = import.meta.glob('/src/assets/**/*.png', { eager: true, as: 'url' });

    // Function to filter images based on a dynamic folder name
    function getImagesForFolder(folderName) {
        return Object.entries(allImages)
            .filter(([path]) => path.includes(`/src/assets/${folderName}/`))
            .map(([, url]) => url);
    }

    const images = getImagesForFolder(folder);

    let counter = 0;

</script>

<Container ui grid style="padding-top:20px;min-height:200px;padding-bottom:0px;">
    <Column sixteen wide style="padding-bottom: 0px;">
        <Image ui fluid src={images[counter]} />
    </Column>
    <Column three wide></Column>
    <Column two wide>
        <Button ui icon basic inverted on:click={() => counter = Math.max(0, (counter - 1))}>
            <Icon angle left/>
        </Button>
    </Column>
    <Column two wide style="padding-top: 20px; text-align:right;">
        <Text ui large style="text-align:right;">{counter+1}</Text>
    </Column>
    <Column one wide style="padding-top: 20px; text-align:center;">
        <Text ui large>of</Text>
    </Column>
    <Column two wide style="padding-top: 20px; text-align:left;">
        <Text ui large>{images.length}</Text>
    </Column>
    <Column two wide>
        <Button ui icon basic inverted on:click={() => counter = Math.min(images.length-1, (counter + 1))}>
            <Icon angle right/>
        </Button>
    </Column>
    <Column four wide></Column>
</Container>
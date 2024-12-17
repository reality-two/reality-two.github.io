<script lang="ts">
    import { Container, Image, Column, Text, Divider, Button, Icon } from "svelte-fomantic-ui";

    export let folder="";

    // Import all images from the directory
    const allImages = import.meta.glob('/src/assets/**/*.png', { eager: true, as: 'url' });

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

<!-- <Container ui grid> -->
    <Column sixteen wide style="padding-bottom: 0px;">
        <Image ui fluid src={images[counter]} />
    </Column>
    <Column six wide></Column>
    <Column one wide>
        <Button ui icon basic inverted on:click={() => counter = Math.max(0, (counter - 1))}>
            <Icon angle left/>
        </Button>
    </Column>
    <Column two wide style="padding-top: 20px;">
        <Text ui large>{counter+1} of {images.length}</Text>
    </Column>
    <Column one wide>
        <Button ui icon basic inverted on:click={() => counter = Math.min(images.length-1, (counter + 1))}>
            <Icon angle right/>
        </Button>
    </Column>
    <Column six wide></Column>
</Container>
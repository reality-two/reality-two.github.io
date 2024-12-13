<script lang="ts">
    import { Container, Header, Column, Link } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide>
        <Header ui h3 inverted>Growing Strong Ideas</Header>
     </Column>
     <Column sixteen wide>
        This is a little story I created for students I work with to help them better understand what it means to grow strong ideas.  <Link ui href="https://www.linkedin.com/in/priyan-jayamaha-16655316/">Priyan Jayamaha</Link>, created the fantastic illustrations.
     </Column>
    <Column sixteen wide left aligned>
        <div style="position:relative;width:100%;height:0;padding-bottom:calc(56.25% + 40px);"><iframe title="Thinking Critically" allowfullscreen style="position:absolute; width: 100%; height: 100%;border: solid 1px #333;" src="https://www.beautiful.ai/embed/-N_0NfqlHyRmYIUWL_-O?utm_source=beautiful_player&utm_medium=embed&utm_campaign=-Mv_W94JHHhsVB3uEVZc"></iframe><a href="https://www.beautiful.ai/embed/-N_0NfqlHyRmYIUWL_-O?utm_source=beautiful_player&utm_medium=embed&utm_campaign=-Mv_W94JHHhsVB3uEVZc">View The story of hine on Beautiful.ai</a></div>
    </Column>
</Container>

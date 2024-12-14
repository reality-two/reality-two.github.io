<script lang="ts">
    import { Container, Header, Table, Table_Row, Table_Body, Table_Col, Link, Icon } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Header ui h2 inverted>Important Links</Header>
    <Table ui inverted centered>
        <Table_Body>
            <Table_Row>
                <Table_Col right aligned>Github <Icon ui github/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two" target="_blank">https://github.com/reality-two</Link></Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
</Container>

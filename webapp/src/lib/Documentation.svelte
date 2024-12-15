<script lang="ts">
    import { Container, Header, Table, Table_Row, Table_Body, Table_Col, Link, Icon, Column, Text } from "svelte-fomantic-ui";

    export let page = "start";


</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Documentation</Text>
    </Column>
    <Table ui inverted centered huge>
        <Table_Body>
            <Table_Row>
                <Table_Col right aligned>Documentation <Icon ui splotch/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-documentation" target="_blank">https://github.com/reality-two/reality2-documentation</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Core code for R2 Node <Icon ui microchip/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-node-core-elixir" target="_blank">https://github.com/reality-two/reality2-node-core-elixir</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Sentant Definitions <Icon ui book/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-definitions" target="_blank">https://github.com/reality-two/reality2-definitions</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Godot Client <Icon ui glasses/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-godot-client" target="_blank">https://github.com/reality-two/reality2-godot-client</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>IOT WebApp Demo <Icon ui gamepad/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-webapp-iotdemo" target="_blank">https://github.com/reality-two/reality2-webapp-iotdemo</Link></Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
</Container>
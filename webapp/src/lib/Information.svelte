<script lang="ts">
    import { Container, Header, Table, Table_Row, Table_Body, Table_Col, Link, Icon, Column, Text } from "svelte-fomantic-ui";

    export let page = "start";


</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Information</Text>
    </Column>
    <Table ui inverted centered huge>
        <Table_Body>
            <Table_Row>
                <Table_Col right aligned>Documentation <Icon ui splotch/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-documentation" target="_blank">https://github.com/reality-two/reality2-documentation</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>R2 Node core code <Icon ui microchip/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-node-core-elixir" target="_blank">https://github.com/reality-two/reality2-node-core-elixir</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Sentant and Swarm definitions <Icon ui book/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-definitions" target="_blank">https://github.com/reality-two/reality2-definitions</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Godot VR Client <Icon ui glasses/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-godot-client" target="_blank">https://github.com/reality-two/reality2-godot-client</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>IOT WebApp Demo <Icon ui gamepad/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-webapp-iotdemo" target="_blank">https://github.com/reality-two/reality2-webapp-iotdemo</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Default Sentants WebApp <Icon ui gamepad/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-node-core-elixir/tree/main/web/sentants" target="_blank">https://github.com/reality-two/reality2-node-core-elixir/tree/main/web/sentants</Link></Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
</Container>
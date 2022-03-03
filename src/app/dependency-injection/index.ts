import { Container } from "../../contexts/shared/infrastructure/Container";

const container = Container.createContainer([`${__dirname}/application.yaml`]);

export default container;

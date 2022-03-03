import { ContainerBuilder, YamlFileLoader } from "node-dependency-injection";

export class Container {
  private container: ContainerBuilder;
  private fileLoader: YamlFileLoader;

  constructor() {
    this.container = new ContainerBuilder();
    this.fileLoader = new YamlFileLoader(this.container);
    this.container.compile();
  }

  static createContainer(files: string[]): Container {
    const container = new Container();
    container.loadFiles(files);

    return container;
  }

  public loadFiles(files: string[]): void {
    files.map((file) => this.fileLoader.load(file));
  }

  public get(serviceName: string) {
    return this.container.get(serviceName);
  }
}

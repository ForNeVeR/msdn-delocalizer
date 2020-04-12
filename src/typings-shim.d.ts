interface URL {
    new(url: string, base?: string | URL): URL;
    host: string;
    pathname: string;
}
interface Array<T> {
    includes(item: T): boolean;
}

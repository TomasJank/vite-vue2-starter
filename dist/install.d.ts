export declare type HostingerVueComponetsLibraryOptions = {
    global?: boolean;
    components?: object;
    directives?: object;
};
export declare function install(Vue: any, args?: HostingerVueComponetsLibraryOptions): void;
export declare const createHComponents: (options?: HostingerVueComponetsLibraryOptions) => {
    install: (app: any) => void;
};

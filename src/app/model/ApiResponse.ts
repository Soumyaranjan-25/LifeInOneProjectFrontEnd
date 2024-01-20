export class ApiResponse {
    status: string = 'success';
    code: number = 200;
    message: string = '';
    data: any = null;

    constructor(init?: Partial<ApiResponse>) {
        Object.assign(this, init);
    }
}
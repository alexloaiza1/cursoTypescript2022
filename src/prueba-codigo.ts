export interface DoCashAdvanceRequest {
    authToken: string;
    traceId: string;
    ip: string;
    agent: string;
    header: any;
    accountType: number;
    accountNumber: string;
    currency: number;
    amount: number;
    idCard: number;
    term: string;
    promCode: string;
}


export type DoCashAdvance=(doChashAdvanceRequest: DoCashAdvanceRequest,
    {logguer, tdcManagger}:{
        logguer:any,tdcManagger:any},
        )=>Promise<any>;

//export const doCashAdvance=():DoCashAdvance
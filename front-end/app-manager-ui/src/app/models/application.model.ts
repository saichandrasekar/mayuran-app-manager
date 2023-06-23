export interface Application {
    name: string;
    description?: string;
    programmingLanguage?: string;
    type?: string;
    projectAnalysisWorksheetIndicator?: boolean;
    cioFrontDoorIndicator?: boolean;
    userBase?: string;
    missionCritical?: boolean;
    generalSupportSystemName?: string;
    csamSystemName?: string;
    fips199ImpactLevel?: string;
    hostingPlatform?: string;
    isCloud?: boolean;
    endpoint?: string;
    architecture?: string;
    database?: boolean;
    communication?: boolean;
    operationSupportName?: string;
    productOwnerName: string;
    technicalLead: string;
    saasIndicator?: boolean;
}
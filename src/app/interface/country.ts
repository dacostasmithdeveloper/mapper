import { Adminregion } from "./adminregion";
import { IncomeLevel } from "./incomelevel";
import { LendingType } from "./lendingtype";
import { Region } from './region';

export interface Country  {
    
        id: string;
        iso2Code: string;
        name: string;
        region: Region;
        adminregion: Array<Adminregion>;
        incomeLevel: Array<IncomeLevel>;
        lendingType: Array<LendingType>;
        capitalCity: string;
        longitude: string;
        latitude: string;

      
}

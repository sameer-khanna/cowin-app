import { Injectable } from "@angular/core";

@Injectable() 
export class Constants {
public readonly API_ENDPOINT: string = 'https://cdn-api.co-vin.in/api/'; 
public readonly GETSTATES_ENDPOINT: string = this.API_ENDPOINT + 'v2/admin/location/states'; 
public readonly GETDISTRICTS_ENDPOINT: string = this.API_ENDPOINT + 'v2/admin/location/districts/'; 
} 
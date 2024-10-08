import { inject } from "@angular/core"
import { ResolveFn } from "@angular/router"
import { Region } from "models/region.model"
import { RegionService } from "services/region.service"

export const RegionsResolver: ResolveFn<Region[]> = () => {
    return inject(RegionService).findAll()
}
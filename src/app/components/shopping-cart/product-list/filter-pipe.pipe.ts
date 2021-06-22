import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';
@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(productFinalList: Product[], searchTerm: string ) : Product[]{

    if(!productFinalList || !searchTerm){
      return productFinalList;
    }
     return productFinalList.filter(productList =>
      Product.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1 );
  }

}

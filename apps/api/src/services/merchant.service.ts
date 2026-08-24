import {
  merchantService as paymentMerchantService,
} from "@elpay/payment";

import type {
  CreateMerchantInput,
  UpdateMerchantInput,
} from "../validators/merchant.validator";

export class MerchantService {
  async create(
    payload: CreateMerchantInput,
  ) {
    return paymentMerchantService.createMerchant(
      payload,
    );
  }

  async list() {
    return paymentMerchantService.listMerchants();
  }

  async get(id: string) {
    return paymentMerchantService.getMerchant(id);
  }

  async update(
    id: string,
    payload: UpdateMerchantInput,
  ) {
    return paymentMerchantService.updateMerchant(
      id,
      payload,
    );
  }

  async delete(id: string) {
    return paymentMerchantService.deleteMerchant(
      id,
    );
  }
}

export const merchantService =
  new MerchantService();
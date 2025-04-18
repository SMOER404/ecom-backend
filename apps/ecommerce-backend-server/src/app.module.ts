import { Module } from "@nestjs/common";
import { CartModule } from "./cart/cart.module";
import { ReviewModule } from "./review/review.module";
import { CartItemModule } from "./cartItem/cartItem.module";
import { ReturnRequestModule } from "./returnRequest/returnRequest.module";
import { PaymentModule } from "./payment/payment.module";
import { SupportTicketModule } from "./supportTicket/supportTicket.module";
import { ShippingMethodModule } from "./shippingMethod/shippingMethod.module";
import { NotificationModule } from "./notification/notification.module";
import { WebhookModule } from "./webhook/webhook.module";
import { CouponModule } from "./coupon/coupon.module";
import { WishlistModule } from "./wishlist/wishlist.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { OrderModule } from "./order/order.module";
import { AuditLogModule } from "./auditLog/auditLog.module";
import { FileUploadModule } from "./fileUpload/fileUpload.module";
import { BrandModule } from "./brand/brand.module";
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { UserModule } from "./user/user.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    CartModule,
    ReviewModule,
    CartItemModule,
    ReturnRequestModule,
    PaymentModule,
    SupportTicketModule,
    ShippingMethodModule,
    NotificationModule,
    WebhookModule,
    CouponModule,
    WishlistModule,
    OrderItemModule,
    OrderModule,
    AuditLogModule,
    FileUploadModule,
    BrandModule,
    ProductModule,
    CategoryModule,
    UserModule,
    AuthenticationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}

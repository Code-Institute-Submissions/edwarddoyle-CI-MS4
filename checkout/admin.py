from django.contrib import admin
from .models import Order, OrderItem


class OrderLineItemAdminInline(admin.TabularInline):
    model = OrderItem
    readonly_fields = ('lineitem_total',)


class OrderAdmin(admin.ModelAdmin):
    readonly_fields = ('order_number', 'date_ordered', 'delivery_cost',
                       'order_total', 'grand_total', 'original_bag',
                       'stripe_pid')

    fields = ('order_number', 'user_profile', 'full_name',
              'email', 'phone', 'country', 'postcode',
              'address_line_1', 'address_line_2', 'town_or_city',
              'county', 'date_ordered', 'delivery_cost',
              'order_total', 'grand_total', 'original_bag', 'stripe_pid')

    list_display = ('order_number', 'full_name', 'delivery_cost',
                    'order_total', 'grand_total', )

    ordering = ('-date_ordered',)


admin.site.register(Order, OrderAdmin)

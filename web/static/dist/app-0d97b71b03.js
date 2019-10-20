"use strict";function confirmDangerousAction(t){var e=$(t);e.is("a")||(e=e.closest("a"));var n="Are you sure?";e.data("confirm-title")&&(n=e.data("confirm-title"));var a=!0;(e.hasClass("btn-success")||e.hasClass("btn-outline-success"))&&(a=!1);var s=e.clone().children().remove().end().text();return swal({title:n,buttons:[!0,s],dangerMode:a})}function styleForm(t,e){var n=$.extend({},{placeholder:"Select...",no_results:"No results found!",advanced:"Advanced"},e),a=$(t);$.fn.dirrty&&a.dirrty(),a.find("input:not(input[type=button],input[type=submit],input[type=reset],input[type=radio],input[type=checkbox]),textarea,select").addClass("form-control"),a.find("select").wrap('<div class="select" />').chosen({width:"100%",placeholder_text_single:n.placeholder,placeholder_text_multiple:n.placeholder,no_results_text:n.no_results}),autosize(a.find("textarea")),a.find("input[type=radio]").each(function(){$(this).addClass("custom-control-input"),$(this).closest(".form-field"),$(this).next("label").addClass("custom-control-label").addBack().wrapAll('<div class="custom-control custom-radio" />')}),a.find("input[type=checkbox]").each(function(){$(this).addClass("custom-control-input"),$(this).closest(".form-field"),$(this).next("label").addClass("custom-control-label").addBack().wrapAll('<div class="custom-control custom-checkbox" />')}),a.find(".help-block").addClass("form-text"),a.find(".help-block.form-error").parent().addClass("has-error"),a.find(".help-block.form-success").parent().addClass("has-success"),a.find(".help-block.form-warning").parent().addClass("has-warning"),a.find("label.advanced,fieldset.advanced legend").prepend('<span class="text-info">'+n.advanced+"</span> "),a.find("input[type=button],input[type=submit],input[type=reset]").addClass("btn m-t-10");var s=a.find(".has-error:visible");0<s.length&&$([document.documentElement,document.body]).animate({scrollTop:s.first().offset().top-$("#header").outerHeight()-15},1e3)}function notify(t,e,n){var a={type:e,allow_dismiss:!0,label:"Cancel",className:"btn-xs btn-inverse align-right",placement:{from:"top",align:"right"},delay:1e4,z_index:8,animate:{enter:"animated fadeIn",exit:"animated fadeOut"},offset:{x:20,y:85}};n&&(a.placement.from="top",a.placement.align="center",a.offset.y=20),$.notify({message:t},a)}$(function(){$("a.btn-danger,a.btn[data-confirm-title]").on("click",function(t){t.preventDefault();var e=$(this).attr("href");return confirmDangerousAction(t.target).then(function(t){t&&(window.location.href=e)}),!1})}),$("form button.file-upload").on("click",function(t){var e=$(this).siblings("input[type=file]")[0];$(e).trigger("click")}),$("form input[type=file]").change(function(t){var e=$(this).siblings(".file-name")[0];$(e).text($(this).val().split("\\").pop())});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGFuZ2VyLmpzIiwiZm9ybS5qcyIsIm5vdGlmeS5qcyJdLCJuYW1lcyI6WyJjb25maXJtRGFuZ2Vyb3VzQWN0aW9uIiwiZWwiLCIkZWwiLCIkIiwiaXMiLCJjbG9zZXN0IiwiY29uZmlybVRpdGxlIiwiZGF0YSIsImRhbmdlck1vZGUiLCJoYXNDbGFzcyIsImJ1dHRvblRleHQiLCJjbG9uZSIsImNoaWxkcmVuIiwicmVtb3ZlIiwiZW5kIiwidGV4dCIsInN3YWwiLCJ0aXRsZSIsImJ1dHRvbnMiLCJzdHlsZUZvcm0iLCJmb3JtIiwidHJhbnNsYXRpb25zIiwibGFuZyIsImV4dGVuZCIsInBsYWNlaG9sZGVyIiwibm9fcmVzdWx0cyIsImFkdmFuY2VkIiwiJGZvcm0iLCJmbiIsImRpcnJ0eSIsImZpbmQiLCJhZGRDbGFzcyIsIndyYXAiLCJjaG9zZW4iLCJ3aWR0aCIsInBsYWNlaG9sZGVyX3RleHRfc2luZ2xlIiwicGxhY2Vob2xkZXJfdGV4dF9tdWx0aXBsZSIsIm5vX3Jlc3VsdHNfdGV4dCIsImF1dG9zaXplIiwiZWFjaCIsInRoaXMiLCJuZXh0IiwiYWRkQmFjayIsIndyYXBBbGwiLCJwYXJlbnQiLCJwcmVwZW5kIiwiZXJyb3JfZmllbGRzIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImZpcnN0Iiwib2Zmc2V0IiwidG9wIiwib3V0ZXJIZWlnaHQiLCJub3RpZnkiLCJtZXNzYWdlIiwidHlwZSIsIm1pbmltYWxfbGF5b3V0IiwiZ3Jvd2xTZXR0aW5ncyIsImFsbG93X2Rpc21pc3MiLCJsYWJlbCIsImNsYXNzTmFtZSIsInBsYWNlbWVudCIsImZyb20iLCJhbGlnbiIsImRlbGF5Iiwiel9pbmRleCIsImVudGVyIiwiZXhpdCIsIngiLCJ5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJsaW5rVXJsIiwiYXR0ciIsInRhcmdldCIsInRoZW4iLCJ2YWx1ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImlucHV0RWxlbWVudCIsInNpYmxpbmdzIiwidHJpZ2dlciIsImNoYW5nZSIsImZpbGVOYW1lRWxlbWVudCIsInZhbCIsInNwbGl0IiwicG9wIl0sIm1hcHBpbmdzIjoiYUFBQSxTQUFTQSx1QkFBdUJDLEdBQzVCLElBQUlDLEVBQU1DLEVBQUVGLEdBRVBDLEVBQUlFLEdBQUcsT0FDUkYsRUFBTUEsRUFBSUcsUUFBUSxNQUd0QixJQUFJQyxFQUFlLGdCQUNmSixFQUFJSyxLQUFLLG1CQUNURCxFQUFlSixFQUFJSyxLQUFLLGtCQUc1QixJQUFJQyxHQUFhLEdBQ2JOLEVBQUlPLFNBQVMsZ0JBQWtCUCxFQUFJTyxTQUFTLDBCQUM1Q0QsR0FBYSxHQUtqQixJQUFJRSxFQUFhUixFQUFJUyxRQUFRQyxXQUFXQyxTQUFTQyxNQUFNQyxPQUV2RCxPQUFPQyxLQUFLLENBQ1JDLE1BQU9YLEVBQ1BZLFFBQVMsRUFBQyxFQUFNUixHQUNoQkYsV0FBWUEsSUN4QnBCLFNBQVNXLFVBQVVDLEVBQU1DLEdBRXJCLElBQUlDLEVBQU9uQixFQUFFb0IsT0FBTyxHQUFJLENBQ3BCQyxZQUFlLFlBQ2ZDLFdBQWMsb0JBQ2RDLFNBQVksWUFDYkwsR0FFQ00sRUFBUXhCLEVBQUVpQixHQUdWakIsRUFBRXlCLEdBQUdDLFFBQ0xGLEVBQU1FLFNBR1ZGLEVBQU1HLEtBQUssNkhBQTZIQyxTQUFTLGdCQUVqSkosRUFBTUcsS0FBSyxVQUFVRSxLQUFLLDBCQUEwQkMsT0FBTyxDQUN2REMsTUFBTyxPQUNQQyx3QkFBeUJiLEVBQUtFLFlBQzlCWSwwQkFBMkJkLEVBQUtFLFlBQ2hDYSxnQkFBaUJmLEVBQUtHLGFBRzFCYSxTQUFTWCxFQUFNRyxLQUFLLGFBRXBCSCxFQUFNRyxLQUFLLHFCQUFxQlMsS0FBSyxXQUNqQ3BDLEVBQUVxQyxNQUFNVCxTQUFTLHdCQUNqQjVCLEVBQUVxQyxNQUFNbkMsUUFBUSxlQUNoQkYsRUFBRXFDLE1BQU1DLEtBQUssU0FBU1YsU0FBUyx3QkFBd0JXLFVBQVVDLFFBQVEsaURBRTdFaEIsRUFBTUcsS0FBSyx3QkFBd0JTLEtBQUssV0FDcENwQyxFQUFFcUMsTUFBTVQsU0FBUyx3QkFDakI1QixFQUFFcUMsTUFBTW5DLFFBQVEsZUFFaEJGLEVBQUVxQyxNQUFNQyxLQUFLLFNBQ1JWLFNBQVMsd0JBQ1RXLFVBQ0FDLFFBQVEsb0RBR2pCaEIsRUFBTUcsS0FBSyxlQUFlQyxTQUFTLGFBQ25DSixFQUFNRyxLQUFLLDBCQUEwQmMsU0FBU2IsU0FBUyxhQUN2REosRUFBTUcsS0FBSyw0QkFBNEJjLFNBQVNiLFNBQVMsZUFDekRKLEVBQU1HLEtBQUssNEJBQTRCYyxTQUFTYixTQUFTLGVBR3pESixFQUFNRyxLQUFLLDJDQUNOZSxRQUFRLDJCQUEyQnZCLEVBQUtJLFNBQVMsWUFFdERDLEVBQU1HLEtBQUssMkRBQTJEQyxTQUFTLGNBRy9FLElBQUllLEVBQWVuQixFQUFNRyxLQUFLLHNCQUNKLEVBQXRCZ0IsRUFBYUMsUUFDYjVDLEVBQUUsQ0FBQzZDLFNBQVNDLGdCQUFpQkQsU0FBU0UsT0FBT0MsUUFBUSxDQUNqREMsVUFBV04sRUFBYU8sUUFBUUMsU0FBU0MsSUFBTXBELEVBQUUsV0FBV3FELGNBQWdCLElBQzdFLEtDekRYLFNBQVNDLE9BQU9DLEVBQVNDLEVBQU1DLEdBRTNCLElBQUlDLEVBQWdCLENBQ2hCRixLQUFNQSxFQUNORyxlQUFlLEVBQ2ZDLE1BQU8sU0FDUEMsVUFBVyxpQ0FDWEMsVUFBVyxDQUNQQyxLQUFNLE1BQ05DLE1BQU8sU0FFWEMsTUFBTyxJQUNQQyxRQUFTLEVBQ1RsQixRQUFTLENBQ0xtQixNQUFPLGtCQUNQQyxLQUFNLG9CQUVWakIsT0FBUSxDQUNKa0IsRUFBRyxHQUNIQyxFQUFHLEtBSVBiLElBQ0FDLEVBQWNJLFVBQVVDLEtBQU8sTUFDL0JMLEVBQWNJLFVBQVVFLE1BQVEsU0FDaENOLEVBQWNQLE9BQU9tQixFQUFJLElBRzdCdEUsRUFBRXNELE9BQU8sQ0FBRUMsUUFBU0EsR0FBV0csR0ZEbkMxRCxFQUFFLFdBRUVBLEVBQUUsMENBQTBDdUUsR0FBRyxRQUFTLFNBQVNDLEdBQzdEQSxFQUFFQyxpQkFFRixJQUFNQyxFQUFVMUUsRUFBRXFDLE1BQU1zQyxLQUFLLFFBTTdCLE9BTEE5RSx1QkFBdUIyRSxFQUFFSSxRQUFRQyxLQUFLLFNBQUNDLEdBQy9CQSxJQUNBQyxPQUFPQyxTQUFTQyxLQUFPUCxNQUd4QixNQ3VCZjFFLEVBQUUsMkJBQTJCdUUsR0FBRyxRQUFTLFNBQVNDLEdBQzlDLElBQUlVLEVBQWVsRixFQUFFcUMsTUFBTThDLFNBQVMsb0JBQW9CLEdBRXhEbkYsRUFBRWtGLEdBQWNFLFFBQVEsV0FHNUJwRixFQUFFLHlCQUF5QnFGLE9BQU8sU0FBVWIsR0FDeEMsSUFBSWMsRUFBa0J0RixFQUFFcUMsTUFBTThDLFNBQVMsY0FBYyxHQUNyRG5GLEVBQUVzRixHQUFpQjFFLEtBQUtaLEVBQUVxQyxNQUFNa0QsTUFBTUMsTUFBTSxNQUFNQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb25maXJtRGFuZ2Vyb3VzQWN0aW9uKGVsKSB7XG4gICAgbGV0ICRlbCA9ICQoZWwpO1xuXG4gICAgaWYgKCEkZWwuaXMoJ2EnKSkge1xuICAgICAgICAkZWwgPSAkZWwuY2xvc2VzdCgnYScpO1xuICAgIH1cblxuICAgIGxldCBjb25maXJtVGl0bGUgPSAnQXJlIHlvdSBzdXJlPyc7XG4gICAgaWYgKCRlbC5kYXRhKCdjb25maXJtLXRpdGxlJykpIHtcbiAgICAgICAgY29uZmlybVRpdGxlID0gJGVsLmRhdGEoJ2NvbmZpcm0tdGl0bGUnKTtcbiAgICB9XG5cbiAgICBsZXQgZGFuZ2VyTW9kZSA9IHRydWU7XG4gICAgaWYgKCRlbC5oYXNDbGFzcygnYnRuLXN1Y2Nlc3MnKSB8fCAkZWwuaGFzQ2xhc3MoJ2J0bi1vdXRsaW5lLXN1Y2Nlc3MnKSkge1xuICAgICAgICBkYW5nZXJNb2RlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8galF1ZXJ5IHRyaWNrIHRvIHB1bGwgYW4gaXRlbSdzIHRleHQgd2l0aG91dCBpbm5lciBIVE1MIGVsZW1lbnRzLlxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg2MjQ1OTIvaG93LXRvLWdldC1vbmx5LWRpcmVjdC10ZXh0LXdpdGhvdXQtdGFncy13aXRoLWpxdWVyeS1pbi1odG1sXG4gICAgbGV0IGJ1dHRvblRleHQgPSAkZWwuY2xvbmUoKS5jaGlsZHJlbigpLnJlbW92ZSgpLmVuZCgpLnRleHQoKTtcblxuICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgdGl0bGU6IGNvbmZpcm1UaXRsZSxcbiAgICAgICAgYnV0dG9uczogW3RydWUsIGJ1dHRvblRleHRdLFxuICAgICAgICBkYW5nZXJNb2RlOiBkYW5nZXJNb2RlXG4gICAgfSk7XG59XG5cbiQoZnVuY3Rpb24oKSB7XG5cbiAgICAkKCdhLmJ0bi1kYW5nZXIsYS5idG5bZGF0YS1jb25maXJtLXRpdGxlXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgY29uZmlybURhbmdlcm91c0FjdGlvbihlLnRhcmdldCkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGlua1VybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxufSk7XG5cbiIsImZ1bmN0aW9uIHN0eWxlRm9ybShmb3JtLCB0cmFuc2xhdGlvbnMpIHtcblxuICAgIHZhciBsYW5nID0gJC5leHRlbmQoe30sIHtcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlNlbGVjdC4uLlwiLFxuICAgICAgICBcIm5vX3Jlc3VsdHNcIjogXCJObyByZXN1bHRzIGZvdW5kIVwiLFxuICAgICAgICBcImFkdmFuY2VkXCI6IFwiQWR2YW5jZWRcIlxuICAgIH0sIHRyYW5zbGF0aW9ucyk7XG5cbiAgICB2YXIgJGZvcm0gPSAkKGZvcm0pO1xuXG4gICAgLy8gUHJldmVudCBsZWF2aW5nIHRoZSBwYWdlIGlmIHRoZSBmb3JtIGlzIFwiZGlydHlcIiAoaGFzIHVuc2F2ZWQgY2hhbmdlcykuXG4gICAgaWYgKCQuZm4uZGlycnR5KSB7XG4gICAgICAgICRmb3JtLmRpcnJ0eSgpO1xuICAgIH1cblxuICAgICRmb3JtLmZpbmQoJ2lucHV0Om5vdChpbnB1dFt0eXBlPWJ1dHRvbl0saW5wdXRbdHlwZT1zdWJtaXRdLGlucHV0W3R5cGU9cmVzZXRdLGlucHV0W3R5cGU9cmFkaW9dLGlucHV0W3R5cGU9Y2hlY2tib3hdKSx0ZXh0YXJlYSxzZWxlY3QnKS5hZGRDbGFzcygnZm9ybS1jb250cm9sJyk7XG5cbiAgICAkZm9ybS5maW5kKCdzZWxlY3QnKS53cmFwKCc8ZGl2IGNsYXNzPVwic2VsZWN0XCIgLz4nKS5jaG9zZW4oe1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyX3RleHRfc2luZ2xlOiBsYW5nLnBsYWNlaG9sZGVyLFxuICAgICAgICBwbGFjZWhvbGRlcl90ZXh0X211bHRpcGxlOiBsYW5nLnBsYWNlaG9sZGVyLFxuICAgICAgICBub19yZXN1bHRzX3RleHQ6IGxhbmcubm9fcmVzdWx0c1xuICAgIH0pO1xuXG4gICAgYXV0b3NpemUoJGZvcm0uZmluZCgndGV4dGFyZWEnKSk7XG5cbiAgICAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPXJhZGlvXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0Jyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcbiAgICAgICAgJCh0aGlzKS5uZXh0KCdsYWJlbCcpLmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1sYWJlbCcpLmFkZEJhY2soKS53cmFwQWxsKCc8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvXCIgLz4nKTtcbiAgICB9KTtcbiAgICAkZm9ybS5maW5kKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0Jyk7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZvcm0tZmllbGQnKTtcblxuICAgICAgICAkKHRoaXMpLm5leHQoJ2xhYmVsJylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwnKVxuICAgICAgICAgICAgLmFkZEJhY2soKVxuICAgICAgICAgICAgLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIiAvPicpO1xuICAgIH0pO1xuXG4gICAgJGZvcm0uZmluZCgnLmhlbHAtYmxvY2snKS5hZGRDbGFzcygnZm9ybS10ZXh0Jyk7XG4gICAgJGZvcm0uZmluZCgnLmhlbHAtYmxvY2suZm9ybS1lcnJvcicpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3InKTtcbiAgICAkZm9ybS5maW5kKCcuaGVscC1ibG9jay5mb3JtLXN1Y2Nlc3MnKS5wYXJlbnQoKS5hZGRDbGFzcygnaGFzLXN1Y2Nlc3MnKTtcbiAgICAkZm9ybS5maW5kKCcuaGVscC1ibG9jay5mb3JtLXdhcm5pbmcnKS5wYXJlbnQoKS5hZGRDbGFzcygnaGFzLXdhcm5pbmcnKTtcblxuICAgIC8vIG5vaW5zcGVjdGlvbiBKU0Fubm90YXRvclxuICAgICRmb3JtLmZpbmQoJ2xhYmVsLmFkdmFuY2VkLGZpZWxkc2V0LmFkdmFuY2VkIGxlZ2VuZCcpXG4gICAgICAgIC5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cInRleHQtaW5mb1wiPicrbGFuZy5hZHZhbmNlZCsnPC9zcGFuPiAnKTtcblxuICAgICRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9YnV0dG9uXSxpbnB1dFt0eXBlPXN1Ym1pdF0saW5wdXRbdHlwZT1yZXNldF0nKS5hZGRDbGFzcygnYnRuIG0tdC0xMCcpO1xuXG4gICAgLy8gU2Nyb2xsIHRvIGVycm9ycy5cbiAgICB2YXIgZXJyb3JfZmllbGRzID0gJGZvcm0uZmluZCgnLmhhcy1lcnJvcjp2aXNpYmxlJyk7XG4gICAgaWYgKGVycm9yX2ZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiBlcnJvcl9maWVsZHMuZmlyc3QoKS5vZmZzZXQoKS50b3AgLSAkKCcjaGVhZGVyJykub3V0ZXJIZWlnaHQoKSAtIDE1XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxufVxuXG4kKCdmb3JtIGJ1dHRvbi5maWxlLXVwbG9hZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gJCh0aGlzKS5zaWJsaW5ncygnaW5wdXRbdHlwZT1maWxlXScpWzBdO1xuXG4gICAgJChpbnB1dEVsZW1lbnQpLnRyaWdnZXIoJ2NsaWNrJyk7XG59KTtcblxuJCgnZm9ybSBpbnB1dFt0eXBlPWZpbGVdJykuY2hhbmdlKGZ1bmN0aW9uIChlKXtcbiAgICBsZXQgZmlsZU5hbWVFbGVtZW50ID0gJCh0aGlzKS5zaWJsaW5ncygnLmZpbGUtbmFtZScpWzBdO1xuICAgICQoZmlsZU5hbWVFbGVtZW50KS50ZXh0KCQodGhpcykudmFsKCkuc3BsaXQoJ1xcXFwnKS5wb3AoKSk7XG59KTtcbiIsImZ1bmN0aW9uIG5vdGlmeShtZXNzYWdlLCB0eXBlLCBtaW5pbWFsX2xheW91dCkge1xuXG4gICAgdmFyIGdyb3dsU2V0dGluZ3MgPSB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGFsbG93X2Rpc21pc3M6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnQ2FuY2VsJyxcbiAgICAgICAgY2xhc3NOYW1lOiAnYnRuLXhzIGJ0bi1pbnZlcnNlIGFsaWduLXJpZ2h0JyxcbiAgICAgICAgcGxhY2VtZW50OiB7XG4gICAgICAgICAgICBmcm9tOiAndG9wJyxcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5OiAxMDAwMCxcbiAgICAgICAgel9pbmRleDogOCxcbiAgICAgICAgYW5pbWF0ZToge1xuICAgICAgICAgICAgZW50ZXI6ICdhbmltYXRlZCBmYWRlSW4nLFxuICAgICAgICAgICAgZXhpdDogJ2FuaW1hdGVkIGZhZGVPdXQnXG4gICAgICAgIH0sXG4gICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgeDogMjAsXG4gICAgICAgICAgICB5OiA4NVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmIChtaW5pbWFsX2xheW91dCkge1xuICAgICAgICBncm93bFNldHRpbmdzLnBsYWNlbWVudC5mcm9tID0gJ3RvcCc7XG4gICAgICAgIGdyb3dsU2V0dGluZ3MucGxhY2VtZW50LmFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIGdyb3dsU2V0dGluZ3Mub2Zmc2V0LnkgPSAyMDtcbiAgICB9XG5cbiAgICAkLm5vdGlmeSh7IG1lc3NhZ2U6IG1lc3NhZ2UgfSwgZ3Jvd2xTZXR0aW5ncyk7XG5cbn1cbiJdfQ==
prompt --application/pages/page_groups
begin
--   Manifest
--     PAGE GROUPS: 274321
--   Manifest End
wwv_flow_imp.component_begin (
 p_version_yyyy_mm_dd=>'2024.11.30'
,p_release=>'24.2.2'
,p_default_workspace_id=>28118185333235957468
,p_default_application_id=>274321
,p_default_id_offset=>0
,p_default_owner=>'WKSP_HY3'
);
wwv_flow_imp_page.create_page_group(
 p_id=>wwv_flow_imp.id(28120934546102307762)
,p_group_name=>'Administration'
);
wwv_flow_imp.component_end;
end;
/
